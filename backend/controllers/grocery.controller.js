import { Grocery } from "../models/grocery.model.js";


export const createItem = async (req, res) => {
  const { item } = req.body;
  const data = await Grocery.create({ item });
  console.log(data);
  return res.status(201).json({
    success: true,
    message: "item created successfully.",
    data,
  });
};

export const getItems = async (req, res) => {
  const data = await Grocery.find();
  console.log(data);
  return res.status(200).json(data);
};

export const getItem = async (req, res) => {
  const { id } = req.params;
  const data = await Grocery.findById(id);
  console.log(data);
  return res.status(200).json(data);
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  const data = await Grocery.findByIdAndUpdate(id, { item }, { new: true });
  console.log(data);
  return res.status(200).json({
    success: true,
    message: "Item updated successfully.",
    data
  });
};

export const patchItem = async (req, res) => {
  const { id } = req.params;
  const item = await Grocery.findById(id)
  const data = await Grocery.findByIdAndUpdate( id, {status:!item.status},{new: true } );
  console.log(data);
  return res.status(200).json({
    success: true,
    message: "Item checked successfully",
    data
  });
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  const data = await Grocery.findByIdAndDelete(id);
  console.log(data);
  return res.status(200).json({
    success: true,
    message: "Item deleted successfully.",
    data
  });
};
