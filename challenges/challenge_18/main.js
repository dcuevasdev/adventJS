function fixFiles(files) {
  const filesElements = [];

  const filesRepeated = files.reduce((obj, file) => {
    if (!obj[file]) {
      obj[file] = 1;
      filesElements.push(file);
    } else {
      obj[file] += 1;
      filesElements.push(`${file}(${obj[file] - 1})`);
    }

    return obj;
  }, {});

  console.log(filesElements);
}

const files = ["photo", "postcard", "photo", "photo", "video"];
fixFiles(files);

const files2 = ["file", "file", "file", "game", "game"];
fixFiles(files2);

const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
fixFiles(files3);
