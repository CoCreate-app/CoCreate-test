
export async function add(name, selector, cb) {
    async function cc() {
        let component = (await cb()).default;
        Object.assign(window.CoCreate, {
            [name]: component
        })
    }

    if (document.querySelector(selector))
        await cc()
    else
        listen(cc, selector)

}

export async function addToCoCreate(name, promise){
    let module = await promise;
    Object.assign(window.CoCreate, {[name]:module.default})
}