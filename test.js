import express from "express"
const app = express()
const port = 3000
 
function requireClientId(req, res, next) {
    const clientId = req.headers["x-client-id"];
    
    if (!clientId || clientId.trim() === "") {
        return res.status(400).json({ error: "missing client id" });
    }
    
    next();
}



app.get("/status", requireClientId, (req, res) => {
  res.json({ status: "ok" });
})

app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})