import { renderHook, act } from "@testing-library/react";
import { useAppStore } from "@/lib/state/store";
import { exampleAudit } from "@/lib/mocks/loader";

describe("useAppStore", () => {
  beforeEach(() => {
    // Reset store state before each test
    const { result } = renderHook(() => useAppStore());
    act(() => {
      result.current.clearSelection();
    });
  });

  it("should initialize with null values", () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.selectedBrandId).toBeNull();
    expect(result.current.selectedModuleId).toBeNull();
    expect(result.current.currentAudit).toBeNull();
    expect(result.current.currentModule).toBeNull();
  });

  it("should set selected brand and load audit data", () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedBrand("example-brand-1");
    });

    expect(result.current.selectedBrandId).toBe("example-brand-1");
    expect(result.current.currentAudit).toEqual(exampleAudit);
    expect(result.current.selectedModuleId).toBe(exampleAudit.modules[0].id);
    expect(result.current.currentModule).toEqual(exampleAudit.modules[0]);
  });

  it("should set selected module", () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedBrand("example-brand-1");
    });

    const secondModule = exampleAudit.modules[1];

    act(() => {
      result.current.setSelectedModule(secondModule.id);
    });

    expect(result.current.selectedModuleId).toBe(secondModule.id);
    expect(result.current.currentModule).toEqual(secondModule);
  });

  it("should clear selection", () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedBrand("example-brand-1");
    });

    expect(result.current.selectedBrandId).toBe("example-brand-1");

    act(() => {
      result.current.clearSelection();
    });

    expect(result.current.selectedBrandId).toBeNull();
    expect(result.current.selectedModuleId).toBeNull();
    expect(result.current.currentAudit).toBeNull();
    expect(result.current.currentModule).toBeNull();
  });

  it("should handle invalid brand ID", () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedBrand("invalid-brand-id");
    });

    expect(result.current.selectedBrandId).toBe("invalid-brand-id");
    expect(result.current.currentAudit).toBeNull();
    expect(result.current.selectedModuleId).toBeNull();
    expect(result.current.currentModule).toBeNull();
  });
});
