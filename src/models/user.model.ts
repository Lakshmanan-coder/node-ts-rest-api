import { getModelForClass, prop } from "@typegoose/typegoose";

class UserClass {
  @prop({ required: true })
  public name?: string;

  @prop({ required: true, unique: true })
  public email?: string;

  @prop({ required: true })
  public password?: string;
}

const UserModel = getModelForClass(UserClass, {
  schemaOptions: { timestamps: true, collection: "user" },
});

export default UserModel;
