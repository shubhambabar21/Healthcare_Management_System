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
// import { FormFieldType } from "./forms/PatientForm"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Image from "next/image"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}


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
  const {fieldType,iconSrc,iconAlt,placeholder,showtimeSelect,dateformat,renderSkeleton} =props;
   switch (fieldType) {
    case FormFieldType.INPUT:
      return(
        <div className="flex rounded-md border border-dark-500 bbg-dark-400">
         {iconSrc && (
        <Image
          src={iconSrc}
          height={24}
          width={24}
          alt={iconAlt || 'icon'}
          className='ml-2 w-6 h-auto'
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
      case FormFieldType.PHONE_INPUT:
        return(
          <FormControl>
            <PhoneInput 
            defaultCountry="US"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
            />
          </FormControl>
        )
        case FormFieldType.DATE_PICKER:
          return(
            <div className="flex rounded-md border-dark-500 bg-dark-400">
              <Image
              src="/assets/icons/calender.svg"
              height={24}
              width={24}
              alt="Calender"
              className="ml-2"
               /> 

               <FormControl>
               <DatePicker selected={field.value} onChange={(date) => field.onChange(date)} 
                dateFormat={dateformat ?? 'MM/dd/yyyy'}
                showTimeSelect={showtimeSelect ?? false}
                timeInputLabel="Time:"
                wrapperClassName="date-picker"
                />
                </FormControl>             
            </div>
          )
          case FormFieldType.SKELETON:
            return renderSkeleton ? renderSkeleton(field) : null
            
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
