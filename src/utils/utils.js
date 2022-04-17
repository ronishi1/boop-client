const b64toBlob = (dataURI, mimetype) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {
        type: mimetype
    });
}


export const uploadFile = async(file, updateFunc, fetchUser, errorFunc) => {
    var data = new FormData();
    var reader = new FileReader()
    var fileContent = "";
    reader.readAsDataURL(file)
    reader.onload = async e => {
        // console.log(typeof(e.target.result))
        fileContent = b64toBlob(e.target.result, file.type)
        // console.log(fileContent)
        data.append('content', fileContent)
        // console.log(data)
        data.append('data', e.target.result)
        // console.log(data)
            fetch(`${process.env.REACT_APP_BACKEND_SERVER}imageUpload`, {
                method: 'post',
                body: data
            }).then(
                response => response.json()
            ).then(async data => {     
                await updateFunc({variables:{url:data.url}})
                await fetchUser()
            }).catch(error => {
                errorFunc({status:true, message:"File Exceeds 2MB"})
                setTimeout(()=> errorFunc({status:false,message:""}), 3000)
            })
    }
}