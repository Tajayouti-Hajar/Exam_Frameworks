const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function (req, res, next) {
  const movies = await prisma.movies.findMany({ take: 10 });
  res.send({
    data: movies,
    pagination: {
      count: req.query.total, // Total des enregistrements
      take: req.query.limit, // Nombre d'éléments sélectionnés
      skip: req.query.offset, // Décalage à partir duquel on prend les  données
    },
  });
});

module.exports = router;