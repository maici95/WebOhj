


export default function Athlete(args) {
    return {
        firstNames: args[0],
        lastName: args[1],
        yob: new Date(args[2]).toISOString().slice(0, 10),
        weight: parseFloat(args[3]),
        sport: args[4]
    }
}
