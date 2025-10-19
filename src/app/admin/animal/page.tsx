"use client";
import React, { ComponentProps, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Props = ComponentProps<"div"> & {
  onSaved?: () => void;
};

type AnimalForm = {
  name: string;
  description: string;
  age: number;
  race: string;
  specie: string;
  isAdopted: boolean;
  isAcogido: boolean;
  images: string[];
};

const EditAnimal = ({ onSaved, ...rest }: Props) => {
  const searchParams = useSearchParams();
  const animalId = searchParams.get("id");

  const [form, setForm] = useState<AnimalForm>({
    name: "",
    description: "",
    age: 0,
    race: "",
    specie: "",
    isAdopted: false,
    isAcogido: false,
    images: [],
  });

  useEffect(() => {
    if (animalId) {
      fetch(`/api/animals?id=${animalId}`)
        .then((res) => res.json())
        .then((data) => {
          setForm({
            name: data.name,
            description: data.description,
            age: data.age,
            race: data.race,
            specie: data.specie,
            isAdopted: data.isAdopted,
            isAcogido: data.isAcogido,
            images: data.images.map((img: { url: string }) => img.url),
          });
        });
    }
  }, [animalId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...form.images];
    newImages[index] = value;
    setForm((prev) => ({ ...prev, images: newImages }));
  };

  const handleAddImage = () => setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = animalId ? "PUT" : "POST";
    await fetch("/api/animals", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (onSaved) onSaved();
  };

  return (
    <div {...rest} className="flex flex-col gap-4 p-4 border rounded-md bg-white text-black">
      <h2 className="text-xl font-bold">{animalId ? "Edit Animal" : "New Animal"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-1 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-1 rounded" />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="border p-1 rounded" />
        <input name="race" placeholder="Race" value={form.race} onChange={handleChange} className="border p-1 rounded" />
        <input name="specie" placeholder="Specie" value={form.specie} onChange={handleChange} className="border p-1 rounded" />
        <label>
          <input type="checkbox" name="isAdopted" checked={form.isAdopted} onChange={handleChange} /> Adopted
        </label>
        <label>
          <input type="checkbox" name="isAcogido" checked={form.isAcogido} onChange={handleChange} /> Acogido
        </label>

        <div className="flex flex-col gap-1">
          {form.images.map((img, i) => (
            <input key={i} value={img} placeholder="Image URL" onChange={(e) => handleImageChange(i, e.target.value)} className="border p-1 rounded" />
          ))}
          <button type="button" onClick={handleAddImage} className="bg-violet-400 hover:bg-violet-600 text-white rounded px-2 py-1 mt-1">
            Add Image
          </button>
        </div>

        <button type="submit" className="bg-violet-400 hover:bg-violet-600 text-white rounded px-4 py-2 mt-2">
          {animalId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default EditAnimal;
