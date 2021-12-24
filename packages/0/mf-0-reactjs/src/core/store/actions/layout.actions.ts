export enum LayoutTypes {
	LOADING = '[Layout] Loading',
	LOADED = '[Layout] Loaded'
};

type ILoading = { type: typeof LayoutTypes.LOADING };
type ILoaded = { type: typeof LayoutTypes.LOADED };
export type LayoutActionTypes = ILoading | ILoaded;

export const layoutActionCreators = {
	loading: (): ILoading => ({ type: LayoutTypes.LOADING }),
	loaded: (): ILoaded => ({ type: LayoutTypes.LOADED }),
}