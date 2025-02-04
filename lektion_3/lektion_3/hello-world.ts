
interface User{
    username: string
    password: string
}
helloworld() {
console.log("hellowrold")

const name: string = ""
const name2: String = "" // not recommended(stort S)

const age: number = 15
const currency: number = 289.5

const isTired: boolean = true
const isLoggedIn: boolean = false

const highScoreList: number[] = [200, 20, 15]
const userNameList: Array<string> = ["Benny, Thommas"]

//avoid using any
let anyDataType: any = ""
anyDataType = 0
anyDataType = true

}
function returnNorthing() {} // void by default
function returnnothingExplicit(): void{}
function additionExample(): number {
    return 2 +2
}
const userWithoutInterfaceuser: {username: string, pasword: string} = {
    username: "",
    pasword: ""
}
const User = {
    username: "",
    password: ""
}
function printCurrentUser(username: string, password: string){
    console.log(user)

}
function printCurrentUserWithoutInterface(user: User)
console,log(user)

helloworld()
