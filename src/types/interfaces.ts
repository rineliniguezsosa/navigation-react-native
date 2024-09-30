export interface PrimaryButtonProps {
    label:string;
    onPress:()=> void
}

export type RootStackParamList = {
    HomeScreen: undefined,
    ProductsScreen: undefined,
    ProductScreen: {id:number;name:string},
    SettingScreen: undefined,
};

export interface IoniIconProps {
    name:string,
    coior:string,
    size:number,
}
