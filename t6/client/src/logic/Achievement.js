


export default function Achievement(args) {
    let i = 0;
    return {
        name: args[i++],
        achDate: new Date(args[i++]).toISOString().slice(0, 10)
    }
}
