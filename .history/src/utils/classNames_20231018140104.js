const classNames = (...args) => {

    args.filter(Boolean).join(" ")
    console.log(args)
}



export default classNames;