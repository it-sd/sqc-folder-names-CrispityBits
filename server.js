const newFolderName = function (folders) {
  newFolderCount = 0;
  for(i = 0; i < folders.length; i++) {
    if(folders[i].includes("New Folder")) {
      newFolderCount += 1;
    }
  }

  
  if(newFolderCount != 0) {
    newFolderCount += 1;
  }

  return(`New Folder (${newFolderCount})`);
}

console.log(newFolderName(["New Folder", "New Folder (2)", "New Folder (3)", "Folder Name", "Filler Name", "New Folder (4)"]));
