# [Template] MOH Server Query Discord-Bot
A Discord Bot Template for querying MoH: Allied Assault, Spearhead and Breakthrough servers

---

## Installation
Requires [Node.js](https://nodejs.org)  
- Create your Discord-Bot, get your "TOKEN" and invite it to your server
- Clone or download this repo

- Install required dependencies  
`npm install`

- Edit [config.ini](#configini) and [servers.ini](#serversini) files

- Start the bot  
`npm start`

---

## Config Files

### config.ini
The Bot config

```ini
[bot]

# Your Bot token. Ignore if you use enviroment variables (E.g. Heroku Config Vars)
# Never share your Bot Token with anyone
TOKEN=SuperSecretBotTokenHere

# command to request the list of available servers
svlist_command=!list

# Bot status | Options: online, idle, offline, dnd (Do Not Disturb)
status=online

# Bot activity | Options: PLAYING, STREAMING, LISTENING, WATCHING
activity_type=PLAYING
activity_value=Medal of Honor: Allied Assault

# Embed colors in "Hex format"
# server info embed color
embed_svinfo_color="#308030"
# server list embed color
embed_svlist_color="#808030"
# connection failed embed color
embed_error_color="#803030"
```

### servers.ini
Stores the list of servers

```ini
# Example:
# [Server Name]      # DO NOT USE DOTS ".", SEMICOLONS ";", NUMBER SIGNS "#" OR SQUARE BRACKETS "[" & "]" IN THE NAME!!!
# type=mohaa         # The type of game: mohaa, mohsh or mohbt
# ip=123.123.123.123 # Server IP
# port=12203         # Server Port
# command=!server    # The command to request the server info on Discord

[=|LuV|= Freeze-Tag Server]
type=mohaa
ip=217.182.199.4
port=12203
command=!luv

[=CDX= COUNTDOWN X]
type=mohsh
ip=play.cdx-server.com
port=12203
command=!cdx

[-|RS|- Clan Countdown Server]
type=mohbt
ip=31.186.250.131
port=12205
command=!rs
```

---

## Screenshots

#### Server List 
![server list](https://i.imgur.com/1KYduyw.png)

#### Medal of Honor: Allied Assault Server Info  
![mohaa](https://i.imgur.com/uNcyNUX.png)

#### Medal of Honor: Allied Assault Spearhead Server Info  
![mohsh](https://i.imgur.com/szbBuah.png)

#### Medal of Honor: Allied Assault Breakthrough Server Info  
![mohbt](https://i.imgur.com/VP5X3Yy.png)

#### Connection failed  
![MoH:AA Server](https://i.imgur.com/5rBI5sw.png)
