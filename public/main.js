const path = require('path')
const fs = require('fs')

//path to .md files
const dirPath = path.join(__dirname, "../src/content")
const dirPathPages = path.join(__dirname, "../src/pages/")

//will take all the posts and save to an array
let postList = []
let pageList =[]

//
/**
 * get posts from the md files with metadata and store in an object
 * @param {String} jsonFileName 
 * The filename of the json file to place the content in relative to the current file
 * @param {String} mdContent
 * The location of the markdown files relative to the current file 
 */
const getPosts = async (jsonFileName, mdContent) => {
    const dirPath = path.join(__dirname, mdContent?mdContent:"../src/content")
    //read files
    await fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log('Failed to list contents of directory'+ err);
        }
        
        //files are returned as an array, loop throught them
        files.forEach((file, i) => {
            
            let obj = {}
            let post;
            //read contents of each file
            fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
                //get the index of --- in the md file
                const getMetaDataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc;
                }
                //get the values between the --- as objects
                const parseMetadata = (lines, metadataIndices) => {
                    //get the text between the --- in the md files
                    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                    //Split based on the pair: value in the metadata, and assign the objects
                    metadata.forEach(line => {
                        obj[line.split(': ')[0]] =line.split(': ')[1]
                    })
                    
                    return obj;
                }
                //get content alone, no metadata as a string
                const parseContent = (lines, metadataIndices) => {
                    if (metadataIndices.length > 0) {
                        //return everything after second ---
                        lines = lines.slice(metadataIndices[1] + 1)
                        
                        return lines.join('\n');
                    }
                }
                //split the contents of the files by lines
                const lines = contents.split('\n');
                //get indices of the metadata lines
                const metadataIndices = lines.reduce(getMetaDataIndices, [])
                //receive the metadata as an object
                const metadata = parseMetadata(lines, metadataIndices)
                //receive the content minus the metadata
                const content = parseContent(lines, metadataIndices)
                
                post = {
                    id: i + 1,
                    title: metadata.title ? metadata.title : 'No title',
                    author: metadata.author ? metadata.author : 'No author',
                    date: metadata.date ? metadata.date : 'No date',
                    content: content ? content : 'No content',
                }
                
                //add the post object to the postlist array
                postList.push(post);
                //convert the array to json and store in a json file
                if (i === files.length - 1) {
                    let data = JSON.stringify(postList)
                    const path = 'src/contentJSON/' + (jsonFileName ? jsonFileName : 'error.json')
                    fs.writeFileSync(path, data)
                }
            })
        })
    })   
}

/**
 * Get page content alone, no metadata
 */
const getPages = async () => {
    //read files
    await fs.readdir(dirPathPages, (err, files) => {
        if (err) {
            return console.log('Failed to list contents of directory' + err);
        }
        
        //files are returned as an array, loop throught them
        files.forEach((file, i) => {
            let page;
            //read contents of each file
            fs.readFile(`${dirPathPages}/${file}`, 'utf8', (err, contents) => {
                //place contents in an object with property content todo: make it unique
                
                page = {
                    content: contents
                }
                // add the post object to the postlist array
                pageList.push(page);
                //convert the array to json and store in a json file
                if (i === files.length - 1) {
                    let data = JSON.stringify(pageList)
                    fs.writeFileSync('src/contentJSON/pages.json', data)
                }
            })
        })
    })

}

/**
 * get posts from the md files with metadata and store in a json object
 * @param {String} mdContentFile
 * The location of the markdown files relative to src/contentJSON folder
 * * @param {String} jsonFileName
 * The filename of the json file to place the content in relative to src folder
 */
const getSectionAsObject = async( mdContentFile, jsonFileName) => {
    //get path to the md file's folder
    const dirPath = path.join(__dirname, "../src/")
    //read file
            let post;
            //read contents of the file
    fs.readFile(`${dirPath}/${mdContentFile ? mdContentFile : "nofile.md"}`, 'utf8', (err, contents) => {
        if (err) {
            return console.log("File error "+ err);
        }
        
        //get the index of --- in the md file, for the metadata positions
        const getMetaDataIndices = (acc, elem, i) => {
            if (/^---/.test(elem)) {
                acc.push(i)
            }
            return acc;
        }
        //get the values between the --- as objects
        const parseMetadata = (lines, metadataIndices) => {
            let obj = {}
            let lastIndexWithValidMeta = 0
            //get the text between the --- in the md files
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
            //Split based on the pair: value in the metadata, and assign the objects
            metadata.forEach((line, i) => {
                //remove line breaks and carriage returns()\r)
                line = line.replace(/(\r\n|\n|\r)/gm, "")  
                //check if line is valid metadata
                if (i > 0 && !(/(\w+?:[ ])/.test(line))) {
                    //assume line is a string and add to previous metadata value
                    //also remove double space characters
                    obj[metadata[lastIndexWithValidMeta].split(': ')[0]] += line.replace(/\s+/g, " ")
                    return obj
                }
                lastIndexWithValidMeta =i
                obj[line.split(': ')[0]] = line.split(': ')[1]
            })
            console.log(obj);
            return obj;
        }
        //get content alone, no metadata as a string
        const parseContent = (lines, metadataIndices) => {
            if (metadataIndices.length > 0) {
                //return everything after second ---
                lines = lines.slice(metadataIndices[1] + 1)
                return lines.join('\n');
            }
            return lines.join('\n');
        }
        //split the contents of the files by lines
        const lines = contents.split('\n');
        //get indices of the metadata lines
        const metadataIndices = lines.reduce(getMetaDataIndices, [])
        //receive the metadata as an object, 
        //check if there is metadata
        if (metadataIndices.length) {
            const metadata = parseMetadata(lines, metadataIndices)
            const content = parseContent(lines, metadataIndices)
            post = {
                ...metadata,
                content: content ? content : 'No content',
            }
            
        }else{
        //receive the content minus the metadata
            const content = lines.join('\n');
            post = {
                content: content ? content : 'No content',
            }
        }
        

        //convert the post object to json and store in a json file
        let data = JSON.stringify(post)
        //path to store the JSON object    
        const path = 'src/contentJSON/' + (jsonFileName ? jsonFileName : 'error.json')
        fs.writeFileSync(path, data)
    })
        
    
}

getSectionAsObject('pagecontent/HomeCarousel/homeCarouselTop.md','homeCarouselTop.json' )
// getPosts('posts.json', "../src/content");
// getPages();