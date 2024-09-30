import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AttributeDescriptorModel } from 'types/attributes';
import { BulkActionModel, ConnectorResponseModel } from 'types/connectors';
import { CredentialCreateRequestModel, CredentialEditRequestModel, CredentialResponseModel } from 'types/credentials';
import { createFeatureSelector } from 'utils/ducks';

export type State = {
    checkedRows: string[];

    deleteErrorMessage: string;
    bulkDeleteErrorMessages: BulkActionModel[];

    credential?: CredentialResponseModel;
    credentials: CredentialResponseModel[];

    credentialProviders?: ConnectorResponseModel[];
    credentialProviderAttributeDescriptors?: AttributeDescriptorModel[];

    isFetchingCredentialProviders: boolean;
    isFetchingCredentialProviderAttributeDescriptors: boolean;

    isFetchingList: boolean;
    isFetchingDetail: boolean;
    isCreating: boolean;
    isDeleting: boolean;
    isUpdating: boolean;
    isBulkDeleting: boolean;
};

export const initialState: State = {
    checkedRows: [],

    deleteErrorMessage: '',
    bulkDeleteErrorMessages: [],

    credentials: [],

    isFetchingCredentialProviders: false,
    isFetchingCredentialProviderAttributeDescriptors: false,

    isFetchingList: false,
    isFetchingDetail: false,
    isCreating: false,
    isDeleting: false,
    isUpdating: false,
    isBulkDeleting: false,
};

export const slice = createSlice({
    name: 'credentials',

    initialState,

    reducers: {
        resetState: (state, action: PayloadAction<void>) => {
            Object.keys(state).forEach((key) => {
                if (!initialState.hasOwnProperty(key)) (state as any)[key] = undefined;
            });

            Object.keys(initialState).forEach((key) => ((state as any)[key] = (initialState as any)[key]));
        },

        setCheckedRows: (state, action: PayloadAction<{ checkedRows: string[] }>) => {
            state.checkedRows = action.payload.checkedRows;
        },

        clearDeleteErrorMessages: (state, action: PayloadAction<void>) => {
            state.deleteErrorMessage = '';
            state.bulkDeleteErrorMessages = [];
        },

        listCredentialProviders: (state, action: PayloadAction<void>) => {
            state.credentialProviders = undefined;
            state.isFetchingCredentialProviders = true;
        },

        listCredentialProvidersSuccess: (state, action: PayloadAction<{ connectors: ConnectorResponseModel[] }>) => {
            state.isFetchingCredentialProviders = false;
            state.credentialProviders = action.payload.connectors;
        },

        listCredentialProvidersFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingCredentialProviders = false;
        },

        getCredentialProviderAttributesDescriptors: (state, action: PayloadAction<{ uuid: string; kind: string }>) => {
            state.isFetchingCredentialProviderAttributeDescriptors = true;
            state.credentialProviderAttributeDescriptors = [];
        },

        getCredentialProviderAttributesDescriptorsSuccess: (
            state,
            action: PayloadAction<{ credentialProviderAttributesDescriptors: AttributeDescriptorModel[] }>,
        ) => {
            state.isFetchingCredentialProviderAttributeDescriptors = false;
            state.credentialProviderAttributeDescriptors = action.payload.credentialProviderAttributesDescriptors;
        },

        getCredentialProviderAttributesDescriptorsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingCredentialProviderAttributeDescriptors = false;
        },

        listCredentials: (state, action: PayloadAction<void>) => {
            state.checkedRows = [];
            state.credentials = [];
            state.isFetchingList = true;
        },

        listCredentialsSuccess: (state, action: PayloadAction<{ credentialList: CredentialResponseModel[] }>) => {
            state.credentials = action.payload.credentialList;
            state.isFetchingList = false;
        },

        listCredentialsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingList = false;
        },

        getCredentialDetail: (state, action: PayloadAction<{ uuid: string }>) => {
            state.credential = undefined;
            state.isFetchingDetail = true;
        },

        getCredentialDetailSuccess: (state, action: PayloadAction<{ credential: CredentialResponseModel }>) => {
            // state.credential = action.payload.credential;
            state.credential = JSON.parse(JSON.stringify(action.payload.credential));
            state.isFetchingDetail = false;
        },

        getCredentialDetailFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingDetail = false;
        },

        createCredential: (
            state,
            action: PayloadAction<{ credentialRequest: CredentialCreateRequestModel; usesGlobalModal?: boolean }>,
        ) => {
            state.isCreating = true;
        },

        createCredentialSuccess: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isCreating = false;
        },

        createCredentialFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isCreating = false;
        },

        updateCredential: (state, action: PayloadAction<{ uuid: string; credentialRequest: CredentialEditRequestModel }>) => {
            state.isUpdating = true;
        },

        updateCredentialSuccess: (state, action: PayloadAction<{ credential: CredentialResponseModel }>) => {
            state.isUpdating = false;

            const index = state.credentials.findIndex((credential) => credential.uuid === action.payload.credential.uuid);

            if (index >= 0) {
                state.credentials[index] = action.payload.credential;
            } else {
                state.credentials.push(action.payload.credential);
            }

            if (state.credential?.uuid === action.payload.credential.uuid) {
                state.credential = action.payload.credential;
            }
        },

        updateCredentialFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isUpdating = false;
        },

        deleteCredential: (state, action: PayloadAction<{ uuid: string }>) => {
            state.deleteErrorMessage = '';
            state.isDeleting = true;
        },

        deleteCredentialSuccess: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isDeleting = false;
            const index = state.credentials.findIndex((credential) => credential.uuid === action.payload.uuid);
            if (index >= 0) state.credentials.splice(index, 1);
        },

        deleteCredentialFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.deleteErrorMessage = action.payload.error || 'Unknown error';
            state.isDeleting = false;
        },

        bulkDeleteCredentials: (state, action: PayloadAction<{ uuids: string[] }>) => {
            state.bulkDeleteErrorMessages = [];
            state.isBulkDeleting = true;
        },

        bulkDeleteCredentialsSuccess: (state, action: PayloadAction<{ uuids: string[] }>) => {
            state.isBulkDeleting = false;

            action.payload.uuids.forEach((uuid) => {
                const index = state.credentials.findIndex((credential) => credential.uuid === uuid);
                if (index >= 0) state.credentials.splice(index, 1);
            });

            if (state.credential && action.payload.uuids.includes(state.credential.uuid)) state.credential = undefined;
        },

        bulkDeleteCredentialsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isBulkDeleting = false;
        },
    },
});

const state = createFeatureSelector<State>(slice.name);

const checkedRows = createSelector(state, (state) => state.checkedRows);

const deleteErrorMessage = createSelector(state, (state) => state.deleteErrorMessage);
const bulkDeleteErrorMessages = createSelector(state, (state) => state.bulkDeleteErrorMessages);

const credentialProviders = createSelector(state, (state) => state.credentialProviders);
const credentialProviderAttributeDescriptors = createSelector(state, (state) => state.credentialProviderAttributeDescriptors);

const credential = createSelector(state, (state) => state.credential);
const credentials = createSelector(state, (state) => state.credentials);

const isFetchingCredentialProviders = createSelector(state, (state) => state.isFetchingCredentialProviders);
const isFetchingCredentialProviderAttributeDescriptors = createSelector(
    state,
    (state) => state.isFetchingCredentialProviderAttributeDescriptors,
);

const isFetchingList = createSelector(state, (state) => state.isFetchingList);
const isFetchingDetail = createSelector(state, (state) => state.isFetchingDetail);
const isCreating = createSelector(state, (state) => state.isCreating);
const isDeleting = createSelector(state, (state) => state.isDeleting);
const isUpdating = createSelector(state, (state) => state.isUpdating);
const isBulkDeleting = createSelector(state, (state) => state.isBulkDeleting);

export const selectors = {
    state,

    checkedRows,

    deleteErrorMessage,
    bulkDeleteErrorMessages,

    credentialProviders,
    credentialProviderAttributeDescriptors,

    credential,
    credentials,

    isFetchingCredentialProviders,
    isFetchingCredentialProviderAttributeDescriptors,

    isFetchingList,
    isFetchingDetail,
    isCreating,
    isDeleting,
    isUpdating,
    isBulkDeleting,
};

export const actions = slice.actions;

export default slice.reducer;
