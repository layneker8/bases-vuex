
const randomInt = ()=>{

    return new Promise((resolve) => {
        const random = Math.floor(Math.random() * 10)
        setTimeout(() => {
            resolve(random)
        }, 3000);
     })
}

export default randomInt