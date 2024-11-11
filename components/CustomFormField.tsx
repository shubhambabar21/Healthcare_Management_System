/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"

interface CustomProps {
     control: Control<any>,
     fieldType: FormFieldType,
     name : string,
     label ?:string,
     placeholder? :string,
     iconSrc?: string,
     iconAlt?: string,
     disabled?: boolean,
     dateformat:string,
     showtimeSelect?:boolean,
     children?:React.ReactNode,
     renderSkeleton?:(field:any) =>React.ReactNode,
     field: string

   
}

const RenderField = ({field, props}:{field: any ; props : CustomProps })=>{
  const {fieldType,iconSrc,iconAlt,placeholder} =props;
   switch (fieldType) {
    case FormFieldType.INPUT:
      return(
        <div className="flex rounded-md border border-dark-500 bbg-dark-400">
         {iconSrc && (
        <img
          src={iconSrc}
          height={24}
          width={24}
          alt={iconAlt || 'icon'}
          className='ml-2'
          />
      )}
      <FormControl>
        <Input
        placeholder={placeholder}
        {...field}
        className="shad-input border-0"
        />
        
      </FormControl>
        </div>
      )
    default:
      break;
   }
}

const CustomFormField = (props: CustomProps) => {
  const {control,fieldType,name,label} = props;
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
         <FormItem className="flex-1">
        {fieldType !== FormFieldType.CHECKBOX && label && (
          <FormLabel>{label}</FormLabel>
        )}
        <RenderField field={field} props={props} />

        <FormMessage className="shad-error"/>
         </FormItem>
        )}
      />
    </div>
  )
}

export default CustomFormField