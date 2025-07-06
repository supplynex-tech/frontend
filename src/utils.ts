function format(template: string, ...values: (string | number)[]): string {
    if (values){
        return template.replace(/{}/g, () => {
            const value = values.shift();
            if (value === undefined) {
                throw new Error("Not enough values provided to format the string.");
            }
            return String(value);
        });
    }
    return template
}

export default format