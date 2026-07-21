import { useCallback, useEffect, useRef, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import { ShortResponse, ShortCommand } from "../../../types"

import {
    ScriptActionDetails,
    ScriptsResponse,
} from "../../types/scripts";

const normalizeShortResponse = (response: any): ShortResponse => ({
    data: Array.isArray(response?.data) ? response.data : [],
    page: response?.page ?? 1,
    page_size: response?.page_size ?? 10,
    total_pages: response?.total_pages ?? 1,
    total_items: response?.total_items ?? 0,
});

export function useApiCommands(storageName: string) {
    const api = useDialogApi();

    const [commands, setCommands] = useState<ShortResponse | null>(null);

    const [loading, setLoading] = useState(true);

    const hasLoadedRef = useRef(false);

    const loadCommands = async (storageName: string, page: number = 1, append: boolean = false) => {
        setLoading(true);

        try {
            const response = normalizeShortResponse(await api._getShort(`${storageName}`, page));
            setCommands(prev => {
                if (!append || !prev) {
                    return response;
                }

                return {
                    ...response,
                    data: [
                        ...prev.data,
                        ...response.data,
                    ],
                };
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (hasLoadedRef.current) {
            return;
        }

        hasLoadedRef.current = true;
        void loadCommands(storageName);
    }, [loadCommands]);

    const editStatusCommand = async (storageName: string, uuid: string, status: boolean) => {
        const response = await api._update_status(storageName, uuid, status);
        return response
    };

    const saveCommand = async (storageName: string, formData: any) => {
        const result = await api._save(formData, storageName);
        return result
    };

    const updateCommand = async (storageName: string, formData: any) => {
        if (!formData.uuid) return

        const { uuid, ...payload } = formData;

        const result = await api._update(uuid, storageName, payload)

        return result
    }

    const deleteCommand = async (storageName: string, uuid: string) => {
        const result = await api._delete(uuid, storageName);
        return result
    };

    const getAllCommands = async (storageName: string) => {
        return api._getAllShort(storageName);
    };

    const detailInformationCommand = async (storageName: string, uuid: string) => {
        const response: any = await api._getDetail(uuid, storageName);
        return response
    }


    return {
        loading,
        commands,

        loadCommands,
        saveCommand,
        deleteCommand,
        updateCommand,
        editStatusCommand,
        getAllCommands,
        detailInformationCommand
    };
}
