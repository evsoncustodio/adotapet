const debug = require('debug')('leva-eu:api:controllers:caracteristica');

module.exports = (api) => {
    const Caracteristica = require('mongoose').model('Caracteristica');

    return {
        id: (req, res, next, id) => {
            req.id = id;
            next();
        },
        create: (req, res, next) => {
            Caracteristica.create(req.body)
            .then(usuario => {
                res.json(caracteristica);
            })
            .catch(error => {
                res.json(error);
            });
        },
        read: (req, res, next) => {
            Caracteristica.findOne({_id: req.id})
            .exec()
            .then(caracteristica => {
                res.json(caracteristica);
            })
            .catch(error => {
                res.json(error);
            });
        },
        update: (req, res, next) => {
            Caracteristica.findOneAndUpdate({_id: req.id}, req.body, {new: true})
            .exec()
            .then(caracteristica => {
                res.json(caracteristica);
            })
            .catch(error => {
                res.json(error);
            });
        },
        delete: (req, res, next) => {
            Caracteristica.findOneAndRemove({_id: req.id})
            .exec()
            .then(caracteristica => {
                res.json(caracteristica);
            })
            .catch(error => {
                res.json(error);
            });
        },
        list: (req, res, next) => {
            Caracteristica.find(req.query)
            .exec()
            .then(usuarios => {
                res.json(caracteristicas);
            })
            .catch(error => {
                res.json(error);
            });
        }
    }
}