'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between bg-jp-bg">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="jp-editorial-number">ADD</span>
            <span className="w-6 h-px bg-jp-accent" />
          </div>
          <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-1">
            新商品追加
          </p>
          <p className="text-lg font-medium text-jp-navy">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }}
                  type="file"
                  id={`image${index}`}
                  hidden
                />
                <Image
                  className="w-20 h-20 object-cover cursor-pointer rounded-xl border border-jp-borderLight hover:border-jp-border transition-colors duration-200 bg-jp-surface/50 p-1"
                  src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                  alt=""
                  width={100}
                  height={100}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="jp-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted" htmlFor="product-description">
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="jp-input resize-none"
            placeholder="Type here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-32">
            <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="jp-input"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={category}
            >
              <option value="Earphone">Earphone</option>
              <option value="Headphone">Headphone</option>
              <option value="Watch">Watch</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Camera">Camera</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="jp-input"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className="jp-input"
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              required
            />
          </div>
        </div>

        <button type="submit" className="jp-btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
