//your JS code here. If required.
//your JS code here. If required.

function getBrowserInfo() {
            let userAgent = navigator.userAgent;
            let browserName, version;

            if (userAgent.includes("Firefox")) {
                browserName = "Mozilla Firefox";
                version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
            } else if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
                browserName = "Google Chrome";
                version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
            } else if (userAgent.includes("Edg")) {
                browserName = "Microsoft Edge";
                version = userAgent.match(/Edg\/(\d+\.\d+)/)[1];
            } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
                browserName = "Apple Safari";
                version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
            } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
                browserName = "Internet Explorer";
                version = userAgent.match(/(?:MSIE |rv:)(\d+\.\d+)/)[1];
            } else {
                browserName = "Unknown Browser";
                version = "Unknown Version";
            }

            document.getElementById("browser-info").innerText = `You are using ${browserName} version ${version}`;
        }

        document.addEventListener("DOMContentLoaded", getBrowserInfo);