export class Admin{

  private echo;

  constructor(echo: any){
    this.echo = echo;

    this.onConnection();
  }

  onConnection()
  {
    this.echo.server.io.on('connection', (socket: any) => {

      this.onSubscribe(socket);

    	this.onUnSubscribe(socket);

    	this.onDisconnecting(socket);

    });
  }

  onSubscribe(socket: any)
  {
    socket.on('subscribe', (data: any) => {
      if(data.channel == 'private-chanells') return;

      // let current_channel = this.echo.server.io.sockets.adapter.rooms[data.channel];

      let response = {
        socket_id: socket.id,
        channel: data.channel,
        subscription_count: 1
      };

      this.echo.server.io.to('private-channels').emit('client.subscribed', 'private-channels', response);

      console.log('emitted in');
    });
  }

  onUnSubscribe(socket: any)
  {
    socket.on('unsubscribe', (data: any) => {

      let response = {
        socket_id: socket.id,
        channel: data.channel
      }

      this.echo.server.io.to('private-channels').emit('client.unsubscribed', 'private-channels', response);
      console.log('emitted out');
    })
  }

  // onDisconnecting(socket: any)
  // {
  // 	socket.on('disconnecting', (reason: any) => {
  //     console.log(socket.rooms, socket.id)
  //     Object.keys(socket.rooms).forEach(room => {
  //
  //         if (room !== socket.id) {
  //             // this.channel.leave(socket, room, reason);
  //             let response = {
  //               channel: room,
  //               reason: reason
  //             };
  //             this.echo.server.io.to('private-channels').emit('client.disconnecting', 'private-channels', response);
  //         }
  //     });
  //
  //     console.log(reason, 'my log')
  // 	})
  // }

  onDisconnecting(socket: any)
  {
  	socket.on('disconnecting', (reason: any) => {
      console.log(this.echo.server.io.sockets);
      if(reason === 'transport close') {

        let response = {
          socket_id: socket.id,
          reason: reason
        };

        this.echo.server.io.to('private-channels').emit('client.disconnecting', 'private-channels', response);
      }

      console.log(reason, 'my log')
  	})
  }

  getChannels(): any {
        let rooms = this.echo.server.io.sockets.adapter.rooms;
        let channels = [];

        Object.keys(rooms).forEach(function(channelName) {
            if (rooms[channelName].sockets[channelName]) {
                return;
            }

            channels.push({
              subscription_count: rooms[channelName].length,
              channel: channelName
            });
        });

        return channels;
    }
}
