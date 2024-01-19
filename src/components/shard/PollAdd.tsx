import { Label } from "@radix-ui/react-label";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { postPoll } from "@/service/polls.service";

const PollAdd = () => {
  const { control, setValue, getValues, register, handleSubmit } = useForm({
    defaultValues: {
      optionList: [{ name: "" }],
      caption: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "optionList",
  });
  const onSave = async (data: any) => {
    // setPollList({ ...data });
    await postPoll(data);
  };

  const addOption = () => {
    setValue("optionList", [...getValues("optionList"), { name: "" }]);
  };

  const removeOption = (index: number) => {
    const currentOptions = getValues("optionList");
    currentOptions.splice(index, 1);
    setValue("optionList", currentOptions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSave)}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create a Poll</CardTitle>
            <CardDescription>
              Create a poll and capture views of others.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="caption">Title</Label>
                <Input
                  {...register("caption")}
                  id="caption"
                  name="caption"
                  placeholder="What you want to ask ?"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Options</Label>
                {fields.map((field, index) => {
                  return (
                    <div key={index} className="flex align-center space-y-1.5">
                      <Input
                        {...register(`optionList.${index}.name`)}
                        id="name"
                        placeholder={`Option${index + 1}`}
                      />
                      <Button onClick={addOption} type="button">
                        +
                      </Button>
                      {index > 0 ? (
                        <Button
                          type="button"
                          onClick={() => removeOption(index)}
                        >
                          -
                        </Button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="reset" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Deploy</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default PollAdd;
