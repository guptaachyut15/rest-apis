const express = require("express");
const fs = require("fs");
let records = require("./database/records.json");
const { json } = require("express/lib/response");

const app = express();

//middleware to support form data
app.use(express.urlencoded({ extended: false }));

// app.use((req,res,next)=>{
//   console.log(req)
//   next()
// })

app.listen("8080", () => {
  console.log("Listening on port 8080");
});

app.get("/users", (req, res) => {
  const html = `<ul>
    ${records.map((record) => `<li>${record.first_name}</li>`).join("")}
    </ul>`;
  return res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => {
    return res.json(records);
  })
  .post((req, res) => {
    let data = req.body;
    let index = records.length + 1;
    records.push({ ...data, id: index });
    fs.writeFile("./database/records.json", JSON.stringify(records), () => {
      res.json({ status: `record added with index:${index}` });
    });
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    let user = records.find((record) => record.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    let data = req.body;
   
    if (record === undefined){
      return res.json({"status":`No user with an index of ${id}`})
    }
    let new_record = { ...record, ...data };
    let new_records = records.filter((record) => record.id != id);
    new_records.push(new_record);
    fs.writeFile("./database/records.json", JSON.stringify(new_records), () => {
      records=new_records
      res.json({ status: `record patched with index:${id}` });
    });
  })
  .delete((req, res) => {
    let id = Number(req.params.id)
    let new_records = records.filter((record)=>record.id!=id)
    fs.writeFile("./database/records.json", JSON.stringify(new_records), () => {
      records=new_records
      res.json({ status: `record deleted with index:${id}` });
    });
  });
