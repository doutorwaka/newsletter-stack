type UserProps = {
  id: string;
  name: string;
  email: string;
};

export class User {
  private userProps: UserProps;

  private constructor({ id, name, email }: UserProps) {
    this.userProps = { id, name, email };
  }

  public static build(name: string, email: string): User {
    return new User({
      id: crypto.randomUUID().toLowerCase(),
      name,
      email,
    });
  }

  public static with(id: string, name: string, email: string) {
    return new User({
      id,
      name,
      email,
    });
  }

  get id(): string {
    return this.userProps.id;
  }

  get name(): string {
    return this.userProps.name;
  }

  get email(): string {
    return this.userProps.email;
  }
}
