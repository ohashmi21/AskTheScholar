export class newquestionmodel{
    _firstname
    _lastname
    _email
    _question
    _answered=false

    constructor(fname, lname, email, question){
        this._firstname=fname
        this._lastname=lname
        this._email=email
        this._question=question
    }

}