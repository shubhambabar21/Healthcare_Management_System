/* eslint-disable react/jsx-no-undef */
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
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Image from "next/image"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea";

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
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return(
        <div className="flex rounded-md border border-dark-500 bbg-dark-400">
         {props.iconSrc && (
        <Image
          src={props.iconSrc}
          height={24}
          width={24}
          alt={props.iconAlt || 'icon'}
          className='ml-2 w-6 h-auto'
          />
      )}
      <FormControl>
        <Input
        placeholder={props.placeholder}
        {...field}
        className="shad-input border-0"
        />
        
      </FormControl>
        </div>
      )
      case FormFieldType.TEXTAREA:
        return(
          <FormControl>
             <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
          </FormControl>
        );
      case FormFieldType.PHONE_INPUT:
        return(
          <FormControl>
            <PhoneInput 
            defaultCountry="US"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
            />
          </FormControl>
        );
        case FormFieldType.DATE_PICKER:
          return(
            <div className="flex rounded-md border-dark-500 bg-dark-400">
              <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="Calender"
              className="ml-2"
               /> 

               <FormControl>
               <DatePicker selected={field.value} onChange={(date) => field.onChange(date)} 
                dateFormat={props.dateFormat ?? 'MM/dd/yyyy'}
                showTimeSelect={props.showTimeSelect ?? false}
                timeInputLabel="Time:"
                wrapperClassName="date-picker"
                />
                </FormControl>             
            </div>
          );
        case FormFieldType.SELECT:
          return(
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl >
               <SelectTrigger className="shad-select-trigger">
               <SelectValue placeholder={props.placeholder} />
               </SelectTrigger>
                 
                </FormControl>
                <SelectContent className="shad-select-content">
                  {props.children}
                </SelectContent>
              </Select>
            </FormControl>
          );
          case FormFieldType.SKELETON:
            return props.renderSkeleton ? props.renderSkeleton(field) : null
            
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
        <RenderInput field={field} props={props} />

        <FormMessage className="shad-error"/>
         </FormItem>
        )}
      />
    </div>
  )
}

export default CustomFormField
