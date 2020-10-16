


export default function Athlete(args) {
    let i = 0;
    return {
        firstNames: args[i++],
        lastName: args[i++],
        nickName: args[i++],
        yob: new Date(args[i++]).toISOString().slice(0, 10),
        weight: parseFloat(args[i++]),
        sport: args[i++]
    }
}
