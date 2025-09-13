import React, { useState } from 'react';
import { Plus, X, Download, Send, DollarSign } from 'lucide-react';
import { QuoteItem } from '../../types';
import Button from '../UI/Button';
import toast from 'react-hot-toast';

interface QuoteGeneratorProps {
  dealId: string;
  onQuoteCreated: (quoteId: string) => void;
  onClose: () => void;
}

export default function QuoteGenerator({ dealId, onQuoteCreated, onClose }: QuoteGeneratorProps) {
  const [items, setItems] = useState<QuoteItem[]>([
    { name: '', qty: 1, unitPrice: 0, subtotal: 0 }
  ]);
  const [currency, setCurrency] = useState('USD');
  const [taxPct, setTaxPct] = useState(13);
  const [validDays, setValidDays] = useState(30);
  const [isGenerating, setIsGenerating] = useState(false);

  const addItem = () => {
    setItems([...items, { name: '', qty: 1, unitPrice: 0, subtotal: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof QuoteItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    if (field === 'qty' || field === 'unitPrice') {
      newItems[index].subtotal = newItems[index].qty * newItems[index].unitPrice;
    }
    
    setItems(newItems);
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
    const tax = (subtotal * taxPct) / 100;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const handleGenerate = async () => {
    if (items.some(item => !item.name || item.unitPrice <= 0)) {
      toast.error('Please fill in all item details');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simulate quote generation - replace with actual Firebase function
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const quoteData = {
        dealId,
        items,
        currency,
        taxPct,
        totals: calculateTotals(),
        validUntil: new Date(Date.now() + validDays * 24 * 60 * 60 * 1000)
      };
      
      console.log('Generated quote:', quoteData);
      
      toast.success('Quote generated successfully!');
      onQuoteCreated('quote-' + Date.now());
      
    } catch (error) {
      toast.error('Failed to generate quote');
    } finally {
      setIsGenerating(false);
    }
  };

  const { subtotal, tax, total } = calculateTotals();

  return (
    <div className="bg-white border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <DollarSign size={24} className="text-gray-600" />
          <h2 className="text-xl font-light text-gray-900 tracking-wide">Generate Quote</h2>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
      </div>

      {/* Quote Items */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-medium text-gray-900 tracking-wide">Quote Items</h3>
          <button
            onClick={addItem}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-light"
          >
            <Plus size={16} />
            Add Item
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-5">
                <label className="block text-xs text-gray-600 mb-2 font-light tracking-wide">Service</label>
                <input
                  value={item.name}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                  placeholder="e.g. Full Production"
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none font-light"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs text-gray-600 mb-2 font-light tracking-wide">Qty</label>
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateItem(index, 'qty', parseInt(e.target.value) || 0)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none font-light"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs text-gray-600 mb-2 font-light tracking-wide">Unit Price</label>
                <input
                  type="number"
                  value={item.unitPrice}
                  onChange={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none font-light"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs text-gray-600 mb-2 font-light tracking-wide">Subtotal</label>
                <p className="py-2 px-3 bg-gray-50 text-sm font-light">
                  ${item.subtotal.toFixed(2)}
                </p>
              </div>
              <div className="col-span-1">
                <button
                  onClick={() => removeItem(index)}
                  className="p-2 text-gray-400 hover:text-red-500"
                  disabled={items.length === 1}
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-gray-700 font-light mb-3 text-sm tracking-wide">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 focus:border-gray-400 focus:outline-none font-light"
          >
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-light mb-3 text-sm tracking-wide">Tax Rate (%)</label>
          <input
            type="number"
            value={taxPct}
            onChange={(e) => setTaxPct(parseFloat(e.target.value) || 0)}
            className="w-full border border-gray-300 px-3 py-2 focus:border-gray-400 focus:outline-none font-light"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-light mb-3 text-sm tracking-wide">Valid for (days)</label>
          <input
            type="number"
            value={validDays}
            onChange={(e) => setValidDays(parseInt(e.target.value) || 30)}
            className="w-full border border-gray-300 px-3 py-2 focus:border-gray-400 focus:outline-none font-light"
          />
        </div>
      </div>

      {/* Totals */}
      <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
        <div className="space-y-3">
          <div className="flex justify-between font-light">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-light">
            <span className="text-gray-600">Tax ({taxPct}%):</span>
            <span className="text-gray-900">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-medium border-t border-gray-300 pt-3">
            <span>Total:</span>
            <span>${total.toFixed(2)} {currency}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="flex-1"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
              Generating...
            </>
          ) : (
            <>
              <Download size={16} />
              Generate PDF
            </>
          )}
        </Button>
        <Button 
          variant="secondary" 
          disabled={isGenerating}
          className="flex-1"
        >
          <Send size={16} />
          Generate & Send
        </Button>
      </div>
    </div>
  );
}