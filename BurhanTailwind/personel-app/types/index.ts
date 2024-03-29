export type RegisterType = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;

}

export type ErrorType = {
  username: string[];
  email: string[];
  password: string[];
  password2: string[];
  non_field_errors: string[];

};

export type LoginType = {
  username:string;
  password:string;

};

export type ProductType = {
  amount: number;
  brand: string;
  created_date: string;
  id: number;
  rating: number | null;
  seller: string | null;
  seller_id: number;
  vote : number | null;
  name: string;
}


export type SellerProfileType = {
  id: number;
  user : string;
  user_id : number;
  bio : string;
  avatar : string;
  favorites?: [];
  cards?: [];
  seller_products?: [];
}