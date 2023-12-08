import React from "react";
import { useForm } from "react-hook-form"

/*
 * Los inputs deberán ser del siguiente tipo:

id => number
name => text
image => text
typeOne => select
typeTwo => select
Las condiciones de error y validación serán las siguientes:

id => required
name => required minlenght = 3
image => required
typeOne => select required
typeTwo => select
 * 
 */

const New = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='example'  {...register("example")} />

      <input {...register("id",{type:'number', required: true })} />
      {errors.id && <span>This field is required</span>}

      <input {...register("name",{type:'text', required: true , minLength:3})} />
      {errors.name && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
};

export default New;
