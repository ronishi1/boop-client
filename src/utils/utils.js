export const b64toBlob = (dataURI, mimetype) => {
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
    console.log(file)
    var data = new FormData();
    var reader = new FileReader()
    var fileContent = "";
    reader.readAsDataURL(file)
    reader.onload = async e => {
        // console.log(typeof(e.target.result))
        fileContent = b64toBlob(e.target.result, file.type)
        console.log('filecontent')
        console.log(fileContent)
        data.append('content', fileContent)
        // console.log(data)
        data.append('data', e.target.result)
        console.log("blob?")
        console.log(e.target.result)
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
                errorFunc({status:true, message:"File Size Too Large"})
                setTimeout(()=> errorFunc({status:false,message:""}), 3000)
            })
    }
};

export class scuffedjsTPS {
    constructor() {
        // THE TRANSACTION STACK
        this.transactions = [];
        // max number of undoable actions
        this.MAX_UNDO = 50;
        // KEEPS TRACK OF WHERE WE ARE IN THE STACK, THUS AFFECTING WHAT
        // TRANSACTION MAY BE DONE OR UNDONE AT ANY GIVEN TIME
        this.ptr = -1;
    }

    addTransaction(transaction) {
        // check if there are any redo actions on the stack
        if(this.hasTransactionToRedo()) {
            // clear out redo transactions
            this.transactions = this.transactions.slice(0,this.ptr + 1);
        }
        // set maximum number of undoable actions
        if(this.transactions.length >= this.MAX_UNDO){
            // console.log("cut transactions")
            this.transactions = this.transactions.slice(-(this.MAX_UNDO-1));
            this.ptr = this.MAX_UNDO-2;
        }
        this.transactions.push(transaction);
        this.ptr++;
        // console.log(this.transactions);
        // console.log(this.ptr);
    }

    // returns boolean value if the pointer can be moved backward
    hasTransactionToUndo() {
        // console.log(this.ptr >= 0)
        return this.ptr >= 0;
    }

    // returns boolean value if the pointer can be moved forward
    hasTransactionToRedo() {
        return this.ptr < (this.transactions.length - 1);
    }

    undoTransaction() {
        if(this.hasTransactionToUndo()){
            this.transactions[this.ptr].undoTransaction();
            this.ptr--;
        };
        // console.log(this.transactions)
        // console.log(this.ptr);
    }

    redoTransaction() {
        if(this.hasTransactionToRedo()){
            this.ptr++;
            this.transactions[this.ptr].doTransaction();
        };
        // console.log(this.transactions)
        // console.log(this.ptr);
    }

    clearStack() {
        this.transactions = [];
        this.ptr = -1;
    }
};

export class scuffedjsTPS_Transaction {
    constructor() {};
    doTransaction() {};
    undoTransaction () {};
}

export class comicEditTransaction extends scuffedjsTPS_Transaction {
    constructor(type, prev, data, stateFunc) {
		super();
		this.type = type;
        this.prev = prev;
        this.data = data;
        this.stateFunc = stateFunc;
        console.log("jstps data",data)
	}
    doTransaction() {
        this.stateFunc(this.data);

    }
    undoTransaction() {
        this.stateFunc(this.prev);
    }
}
