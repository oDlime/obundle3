const fs = require("fs");
const path = require('path');
const readDir = (entry,mfname) => {
    const dirInfo = fs.readdirSync(entry);
    var dircontent = new DirTree();
    dircontent.files = [];
    dircontent.dirs = [];
    dircontent.name = mfname;
    for (let i = 0; i < dirInfo.length; i++) {
        const location = path.join(entry,dirInfo[i]);
        const info = fs.statSync(location);
        if(info.isDirectory()){
            if (dirInfo[i].includes('.assets')||dirInfo[i]=='img')
                continue;
            dircontent.dirs.push( readDir(location,dirInfo[i]));
        }else{
            if (dirInfo[i].includes('.md')){
                dircontent.files.push(dirInfo[i].replace('.md',''));
            }

        }
    }
    return dircontent;
}
function DirTree(name='name',files,dirs){
    this.name = name;
    this.files = files;
    this.dirs = dirs;
}
var docsdir = readDir(path.join(__dirname,"../../public/docs/"));
docsdir.name = "docs";
var json = JSON.stringify(docsdir);
fs.writeFile(__dirname+"/dirdata.js","var dirdata="+json+";\nexport {dirdata};",function(err){
    if (err!=null) console.log(err);
})
console.log('执行完毕');








