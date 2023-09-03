const { Router } = require('express');
// Importar todos los routers;

const boilerplateRoutes = require ("./boilerplate.js");

const router = Router();

router.get("/", (req, res)=> {
    res.status(200).json({
        message: 'Welcome to the API',
        routes: {
            boilerplate: '/boilerplate'
        }
    })
})
router.use("/boilerplate", boilerplateRoutes);

module.exports = router;
// Configurar los routers



