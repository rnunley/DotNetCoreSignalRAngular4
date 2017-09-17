using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace api.Hubs
{
    public class ChatHub : Hub
    {
        public Task RelayMessage(string message)
        {
            return Clients.All.InvokeAsync("RelayMessage", message);
        }
    }
    
}