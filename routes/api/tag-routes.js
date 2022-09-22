const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// be sure to include its associated Product data
router.get('/', async (req, res) => {
  // Stores the tagData in a variable once the promise is resolved.
  try {
    const tagData = await Tag.findAll();
    include: [{ model: Product }, { model: ProductTag }],
      // Return the tagData promise inside of the JSON response
      res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await updatedTag.findByPk(req.params.id);
    include: [{ model: Product }, { model: ProductTag }],
      res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creates a new tag
router.post('/', async (req, res) => {
  const tagData = await tag_name.create(req.body);

  return res.json(tagData);
});


router.put('/:id', async (req, res) => {
  // updates a tag's name by its `id` value 
  const updatedTag = await Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      tag_name: req.body.tag_name,
    },
    {
      // Gets a tag based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(updatedTag);
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  const deletedTag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(deletedTag);
});


module.exports = router;
