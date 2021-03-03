## WaveOS Node Backend
The goal of this server is to provide a reliable, self-sustaining database system that can be hosted from any browser and still manage to support all WaveOS users at high speeds from a number of connection points.

***

### Node Developers:
 - Visqosity

***

### Dependencies:
Currently, the only three components required to run this server are a working Node.js instance and an installation of `node-scratch-client`, `string2num`, and `fs`. A full explanation on activating server can be shown below

***

### Step By Step Explanation On Activating The Server
1. Go to the GitHub repository [here](https://github.com/Visqosity/WaveOS-Node-Backend)
2. Click the big green `code` button and click `DOWNLOAD ZIP`
3. Unzip the folder in your file manager
4. Open your terminal
5. Navigate to the folder using basic bash commands (For example, if the unzipped foler is in Downloads and its named 'WaveOSNode', you would run `cd Downloads`, and  then `cd WaveOSNode`)
6. Define environmental variables to the system. A tutorial for WindowsOS is [here](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/), and LinuxOS [here](https://www.serverlab.ca/tutorials/linux/administration-linux/how-to-set-environment-variables-in-linux/). These are the variables you need to define:
 - `SCRATCH_USERNAME` - Your scratch username
 - `SCRATCH_PASSWORD` - Your scratch password

7. This is where npm will come in. Run
```sh
npm install
npm install node-scratch-client
npm install string2num
npm install fs
```
in the terminal (While in the correct folder)

8. Once everything is installed, run
```sh
node index.js
node server.js
```

9. And thats it! Your server is now running. You can either keep the terminal window open, or optionally install PM2 ( i will not include that in these instructions)

### Any errors in this process can be directed to [Visqosity](https://scratch.mit.edu/users/Visqosity).

***

### Headers
The header system verifies that messages sent between clients and servers all end up going to their respective targets and no one else. A header is just a small object at the beginning of each packet formatted as `username`, `targetID`, `application`, `packetType`, `packetContents` where `username` is a string containing the sender's username, `targetID` is the numerical ID assigned to the target server, `packetType` is the type or class of the current packet, `application` is the server-side application that the packet is addressed to, and `packetContents` is the complete contents of the packet.

***

### Content
All text after the fourth comma in the header up to the length limit of the cloud variable will be treated as the packet's content. The packet's content can take any form other than a single-digit integer. If the packet's content is a single-digit integer, it will be treated as a connection parameter.
***

### Also see `makingApps.md`

***
