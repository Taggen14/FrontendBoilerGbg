# SETUP FOR TESTING
1. Navigera dig fram till frontend mappen och gör en "npm i"
2. gör en "npm i" i backend mappen också
3. Skapa en .env fil i backend filen, lägg in följande miljövariabler för att testa applikationen

DATABASE_URL=postgresql://neondb_owner:NLy6nUFV4QKe@ep-super-fire-a2v1o3g5.eu-central-1.aws.neon.tech/neondb?sslmode=require

SERVER_PORT=1337
SERVER_HOSTNAME=localhost

GITHUB_CLIENT_ID=Ov23liytUKPfKwmanNUp
GITHUB_CLIENT_SECRET=fefb6bd8588e2c1189aa51917d33113184f5c8e1

4. Öppna en terminal i fontend mappen och en i backend mappen. I båda terminalerna kör "npm run dev"
5. Nu är applikationen redo att interagera med!