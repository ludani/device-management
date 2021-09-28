(async () => {
    const Devices = require('./models/Devices');
 
    try {
        const resultadoCreate = await Devices.create({
            color: 'white',
            partNumber: '3A443DFKz7DsA098PKL58',
            category_id: '5'
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();

(async () => {
    const Category = require('./models/Category');
 
    try {
        const categoryCreate = await Category.create({
            name: 'Desenvolvimento',
        })
        console.log(categoryCreate);
    } catch (error) {
        console.log(error);
    }
})();
