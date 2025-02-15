"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SubmitButton from "@/demo/buttons/SubmitButton";
import DeleteButton from "@/demo/buttons/DeleteButton";
import { Checkbox } from "@/components/ui/checkbox";
import LoadingSkeleton from "@/components/grocery/LoadingSkeleton";
import RefreshingIndicator from "@/components/grocery/RefreshingIndicator";
import ErrorElement from "@/components/grocery/ErrorElement";
import { GroceryListType } from "@/types/GroceryListType";
import {GroceryListURL} from "@/constants"

import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url,{headers:{Authorization:localStorage.getItem('token')}}).then((res) => res.data);

const FormSchema = z.object({
  item: z.string({ required_error: "This field is required." }).min(2, {
    message: "Item must contains at least 2 characters.",
  }),
});

export function HomePage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      item: "",
    },
  });

  // handle fetch data
  const { data, error, isLoading, isValidating, mutate } = useSWR<GroceryListType[]>(GroceryListURL, fetcher);

  console.log(data)

  // handle submit data
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await axios.post( GroceryListURL, data, {headers:{Authorization:localStorage.getItem("token")}});
      console.log(res.data);
      form.reset();

      mutate();
      const { message } = res.data;
      toast({ title: "Success✅", description: message,variant: "default"});
    } catch (error) {
      console.log(error);
      toast({ title: "Failed", description: "Unable to submit data.", variant: "destructive"});
    }
  }

  // handle delete data
  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`${GroceryListURL}/${id}`);
      console.log(res.data);

      const { message } = res.data;
      toast({title: "Success✅", description: message, variant: "default",});

      mutate((data) => data?.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
      toast({ title: "Failed",description: "unable to delete item.",variant: "destructive",});
    }
  };

  // handle update data
  const handleChecked = async (id: string) => {
    try {
      const res = await axios.patch(`${GroceryListURL}/${id}`,data);
      console.log(res.data);

      mutate();

      const { message } = res.data;
      toast({title: "Success✅",description: message,variant: "default",});
    } catch (error) {
      console.log(error);
      toast({title: "Failed", description: "unable to update item",variant: "destructive",});
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-2 h-28"
        >
          <FormField
            control={form.control}
            name="item"
            render={({ field }) => (
              <FormItem className="h-24">
                <FormLabel>Grocery Item</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Basmati rice - 1kg"
                    {...field}
                    autoFocus
                    className="lg:w-[435px] w-[235px]"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>This is your grocery list</FormDescription>
              </FormItem>
            )}
          />
          <SubmitButton name="Add" type="submit" />
        </form>
      </Form>
      <ScrollArea className="h-72 lg:w-[500px] w-[300px] rounded-md border bg-slate-100 dark:bg-slate-700 dark:text-black">
        {isLoading ? (<LoadingSkeleton />) :  

          isValidating ? (<RefreshingIndicator message="Refreshing..." />) : 

            error ? (<ErrorElement error={error.message} onClick={() => mutate()} />) : 
            
          (<div className="p-4">
            <h4 className="mb-4 text-xl font-medium leading-none text-amber-500">{data?.length === 0 ? "Your List is Empty" : "Your List"}</h4>
            {data?.map((grocery: GroceryListType) => 
              (<div 
                key={grocery._id} 
                className="dark:text-white text-sm w-auto">
                  <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          checked={grocery.status} 
                          onCheckedChange={()=> handleChecked(grocery._id)}/>
                        <p className={`${grocery.status===true ?'line-through':''} font-serif`}>{grocery.item}</p>
                      </div>
                      <DeleteButton 
                      name="Delete"
                      type="button"
                      onClick={() => handleDelete(grocery._id)}
                      />
                </div>
                <Separator className="my-2"/>
              </div>)
            )}
          </div>)
          }
      </ScrollArea>
    </div>
  );
}
