const apartmentService = require('../services/apartments.service');

async function createApartment(req, res) {
    try {
        const newApartment = await apartmentService.create(req.body);

        res.status(200).json({
            status: 200,
            data: newApartment,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getApartments(req, res) {
    try {
        res.status(200).json({
            status: 200,
            data: await apartmentService.find(req.query),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getApartment(req, res) {
    try {
        const { apartmentId } = req.params;
        const apartment = await apartmentService.findById(apartmentId);

        if (!apartment) {
            return res.status(400).json({
                status: 400,
                message: 'apartment not found.',
            });
        }

        res.status(200).json({
            status: 200,
            data: apartment,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function updateApartment(req, res) {
    try {
        const { apartmentId } = req.params;
        const apartmentData = req.body;
        await apartmentService.findByIdAndUpdate(apartmentId, apartmentData);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function deleteApartment(req, res) {
    try {
        const { apartmentId } = req.params;
        await apartmentService.findByIdAndDelete(apartmentId);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

module.exports = {
    createApartment,
    getApartments,
    getApartment,
    updateApartment,
    deleteApartment,
};