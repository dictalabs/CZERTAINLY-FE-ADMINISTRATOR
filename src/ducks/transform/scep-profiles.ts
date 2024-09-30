import {
    ScepProfileAddRequestDto,
    ScepProfileAddRequestModel,
    ScepProfileEditRequestDto,
    ScepProfileEditRequestModel,
    ScepProfileListResponseDto,
    ScepProfileListResponseModel,
    ScepProfileResponseDto,
    ScepProfileResponseModel,
} from 'types/scep-profiles';
import { transformAttributeRequestModelToDto, transformAttributeResponseDtoToModel } from './attributes';
import { transformCertificateListResponseDtoToModel } from './certificates';
import { transformRaProfileSimplifiedDtoToModel } from './ra-profiles';

export function transformScepProfileListResponseDtoToModel(scep: ScepProfileListResponseDto): ScepProfileListResponseModel {
    return { ...scep };
}

export function transformScepProfileResponseDtoToModel(scep: ScepProfileResponseDto): ScepProfileResponseModel {
    return {
        ...scep,
        raProfile: scep.raProfile ? transformRaProfileSimplifiedDtoToModel(scep.raProfile) : undefined,
        issueCertificateAttributes: scep.issueCertificateAttributes?.map(transformAttributeResponseDtoToModel),
        customAttributes: scep.customAttributes?.map(transformAttributeResponseDtoToModel),
        caCertificate: scep.caCertificate ? transformCertificateListResponseDtoToModel(scep.caCertificate) : undefined,
    };
}

export function transformScepProfileEditRequestModelToDto(scep: ScepProfileEditRequestModel): ScepProfileEditRequestDto {
    return {
        ...scep,
        issueCertificateAttributes: scep.issueCertificateAttributes.map(transformAttributeRequestModelToDto),
        customAttributes: scep.customAttributes?.map(transformAttributeRequestModelToDto),
    };
}

export function transformScepProfileAddRequestModelToDto(scep: ScepProfileAddRequestModel): ScepProfileAddRequestDto {
    return {
        ...scep,
        issueCertificateAttributes: scep.issueCertificateAttributes.map(transformAttributeRequestModelToDto),
        customAttributes: scep.customAttributes?.map(transformAttributeRequestModelToDto),
    };
}
