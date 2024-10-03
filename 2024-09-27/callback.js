const fs = require('fs');

fs.mkdir('./2024-09-27/seven', { recursive: true }, function (error) {
    if (error) {
        console.log('Error creating directory: ', error);
    } else {
        fs.writeFile('./2024-09-27/seven/programming.txt', 'Hello World!', function (err) {
            if (err) {
                console.log("Create firts file error: ", err);  
            } else {
                fs.writeFile('./2024-09-27/web.json', '{""name":"Hello World"}', function (er) {
                    if (er) {
                        console.log("Create second file error: ", er);
                    } else {
                        fs.readFile('./2024-09-27/programming.txt', 'utf8', function (e, data) {
                            if (e) {
                                console.log("Read firts file error: ", e);
                            } else {
                                fs.appendFile('./2024-09-27/seven/web.json', data, function (errors) {
                                    if (errors) {
                                        console.log("Write firts file error: ", errors);
                                    } else {
                                        fs.writeFile('./2024-09-27/seven/end.txt', 'Okay', function (no) {
                                            if (no) {
                                                console.log("Create third file error: ", no);
                                            } else {
                                                console.log("All files created successfully");
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});