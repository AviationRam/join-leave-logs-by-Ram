-- Join/Leave Logs Made by @ramdoguy3659#6613 --
 
-- Remember not to remove any CopyRights in the script otherwise we will file a DMCA --

local Players = game:GetService("Players")
local http = game:GetService("HttpService")
local webhook = "DISCORD WEBHOOK HERE" -- Place Discord Webhook link here
 
-- Actual Code --
-- Do not touch any code unless you know what your doing --
 
Players.PlayerAdded:Connect(function(plr)
    local data =
    {
        ["contents"] = "",
        ["embeds"] = {{
            ["title"]= plr.name,
            ["description"] = "Player has joined the game",
            ["type"]= "rich",
            ["color"]= tonumber(0x36393e),
            ["fields"]={
                {
                    ["name"]="New Visitor",
                    ["value"]="User: **"..plr.Name.."** with ID: **"..plr.UserId.."** has joined [game](https://www.roblox.com/games/".. game.PlaceId..")/[Profile](https://www.roblox.com/users/"..plr.UserId.."/profile)",
                    ["inline"]=true}}}}
    }
    http:PostAsync(webhook,http:JSONEncode(data))
end)
 
Players.PlayerRemoving:Connect(function(plr)
    local leavedata =
    {
        ["contents"] = "",
        ["embeds"] = {{
            ["title"]= plr.name,
            ["description"] = "Player have left the Game",
            ["type"]= "rich",
            ["color"]= tonumber(0x36393e),
            ["fields"]={
                {
                    ["name"]="Player left the game",
                    ["value"]="User: **"..plr.Name.."** with ID: **"..plr.UserId.."** left [game](https://www.roblox.com/games/".. game.PlaceId..")/[Profile](https://www.roblox.com/users/"..plr.UserId.."/profile)",
                    ["inline"]=true}}}}
    }
    http:PostAsync(webhook,http:JSONEncode(leavedata))
end)

-- © Copyright 2021 Rammy Bot/RamTech --
