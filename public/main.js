const path = require('path')
const fs = require('fs')

/**
 * get the index of --- in the md file
 * @param {*} acc 
 * @param {*} elem 
 * @param {*} i 
 */
const getMetaDataIndices = (acc, elem, i) => {
    if (/^---/.test(elem)) {
        acc.push(i)
    }
    return acc;
}

/**
 *get content alone, (assume no metadata) as a string
 * @param {*} lines 
 * @param {*} metadataIndices 
 */
const  parseContent = (lines, metadataIndices) => {
    if (metadataIndices.length > 0) {
        //return everything after second ---
        lines = lines.slice(metadataIndices[1] + 1)
        return lines.join('\n');
    }
}
/**
 * get the values between the --- as objects
 * @param {*} lines 
 * @param {*} metadataIndices 
 */
const parseMetadata = (lines, metadataIndices) => {
    let obj = {}
    // console.log(test);
    let lastIndexWithValidMeta = 0
    //get the text between the --- in the md files
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
    //Split based on the pair: value in the metadata, and assign the objects
    metadata.forEach((line, i) => {
        line = line.replace(/(\r\n|\n|\r)/gm, "")
        if (i > 0 && !(/(\w+?:[ ])/.test(line))) {
            //assume line is a string and add to previous metadata value
            //also remove double space characters
            obj[metadata[lastIndexWithValidMeta].split(': ')[0]] += line.replace(/\s+/g, " ")
            return obj
        }
        lastIndexWithValidMeta = i
        obj[line.split(': ')[0]] = line.split(': ')[1]
    })

    return obj;
}
/**
 * get posts from the md files with metadata and store in an object
 * @param {String} mdContentFolder
 * The location of the folder that holds the markdown files relative to the current file
 * @param {String} jsonFileName
 * The filename of the json file to place the content in relative to the current file
 */
const getPosts = async  (mdContentFolder, jsonFileName) => {
    let postList = []
    const dirPath = path.join(__dirname, mdContentFolder ? mdContentFolder : "../src/nofolder")
    //read files
    try {
        files = fs.readdirSync(dirPath)
        //files are returned as an array, loop through them

        files.length && files.forEach((file, i) => {
            let post;
            //read contents of each file
            let contents = fs.readFileSync(`${dirPath}/${file}`, 'utf8')
            console.log(contents);
            //split the contents of the files by lines
            const lines = contents.split('\n');
            //get indices of the metadata lines
            const metadataIndices = lines.reduce(getMetaDataIndices, [])
            //receive the metadata as an object
            const metadata = parseMetadata(lines, metadataIndices)
            //receive the content minus the metadata
            const content = parseContent(lines, metadataIndices)
            post = {
                ...metadata,
                content: content ? content : 'No content',
            }
            //add the post object to the postlist array
            postList.push(post);
            //convert the array to json and store in a json file
            if (i === files.length - 1) {
                let data = JSON.stringify(postList)
                const jsonFilePath = 'src/contentJSON/' + (jsonFileName ? jsonFileName : 'error.json')
                fs.writeFileSync(jsonFilePath, data)
            }

        })
    } catch (err) {

        if (err.code === 'ENOENT') {
            console.log('User error: File not found!');
            console.log(err);
        } else {
            console.log("error occured", err);
            throw err;
        }
    }
}

/**
 * Get page content alone, no metadata
 * @param {String} mdContentFolder
 * The location of the folder that holds the markdown files relative to the current file
 * @param {String} jsonFileName
 * The filename of the json file to place the content in relative to the current file
 */
const getPages = async  (mdContentFolder, jsonFileName) => {
    const dirPath = path.join(__dirname, mdContentFolder ? mdContentFolder : "../src/nofolder")
    let pageList = []
    //read files
    try {
        files = fs.readdirSync(dirPath)

        //files are returned as an array, loop through them
        files.forEach((file, i) => {
            let page;
            //read contents of each file
            contents = fs.readFileSync(`${dirPath}/${file}`, 'utf8')
            //place contents in an object with property content todo: make it unique

            page = {
                content: contents
            }
            // add the post object to the postlist array
            pageList.push(page);
            //convert the array to json and store in a json file
            if (i === files.length - 1) {
                let data = JSON.stringify(pageList)
                const jsonFilePath = 'src/contentJSON/' + (jsonFileName ? jsonFileName : 'error.json')
                fs.writeFileSync(jsonFilePath, data)
            }
        }
        )
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('User error: File not found!');
            console.log(err);
        } else {
            console.log("error occured", err);
            throw err;
        }
    }
}

/**
 * get posts from the md files with metadata and store in a json object
 * @param {String} mdContentFile
 * The location of the markdown files relative to src/contentJSON folder
 * * @param {String} jsonFileName
 * The filename of the json file to place the content in relative to src folder
 */
const getSectionAsObject = async (mdContentFile, jsonFileName) => {
    //get path to the md file's folder
    const dirPath = path.join(__dirname, "../src/")
    //read file
    let post;
    //read contents of the file
    try {
        contents = fs.readFileSync(`${dirPath}/${mdContentFile ? mdContentFile : "nofile.md"}`, 'utf8')
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

        } else {
            //receive the content minus the metadata
            const content = lines.join('\n');
            post = {
                content: content ? content : 'No content',
            }
        }

        //convert the post object to json and store in a json file
        let data = JSON.stringify(post)
        //path to store the JSON object    
        const jsonFilePath = 'src/contentJSON/' + (jsonFileName ? jsonFileName : 'error.json')
        fs.writeFileSync(jsonFilePath, data)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('User error: File not found!');
            console.log(err);
        } else {
            console.log("error occured", err);
            throw err;
        }
    }


}

//home -> carousel
getSectionAsObject('pagecontent/HomeCarousel/homeCarouselTop.md', 'homeCarouselTop.json')
//home -> projects
getPosts("../src/pagecontent/homeProjects", 'projects.json');
//home -> investors
getPosts("../src/pagecontent/homeInvestors", 'homeInvestors.json');

// getPages('../src/pages', 'pages.json');